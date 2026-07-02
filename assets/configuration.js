(async function loadServiceConfiguration() {
  const serviceElements = document.querySelectorAll('[data-service-id]');
  const categoryElements = document.querySelectorAll('[data-category-id]');
  if (!serviceElements.length && !categoryElements.length) return;

  const pageName = window.location.pathname.endsWith('services.html')
    ? 'services.html'
    : 'index.html';

  try {
    const response = await fetch('configuration.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const configuration = await response.json();
    const itemsById = new Map();

    configuration.categories.forEach(category => {
      itemsById.set(category.id, category);
      category.treatments.forEach(treatment => itemsById.set(treatment.id, treatment));
    });

    categoryElements.forEach(element => {
      const category = itemsById.get(element.dataset.categoryId);
      const association = category?.frontendAssociations?.find(link => link.page === pageName);
      if (association?.label) element.textContent = association.label;
    });

    serviceElements.forEach(element => {
      const item = itemsById.get(element.dataset.serviceId);
      if (!item) return;

      const association = item.frontendAssociations?.find(link => link.page === pageName);
      const nameTarget = element.querySelector('.service-name, .price-name');
      if (nameTarget && association?.label) nameTarget.textContent = association.label;

      const price = association?.displayedPrice ?? item.price;
      if (price === null || price === undefined) return;

      const priceType = association?.displayedPriceType ?? item.priceType ?? 'exact';
      const priceNote = association?.displayedPriceNote ?? item.priceNote ?? '';
      const target = element.querySelector('.service-price, .price-amount');
      if (!target) return;

      const formattedPrice = new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: configuration.currency || 'EUR',
        minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
        maximumFractionDigits: 2
      }).format(price);

      const label = priceType === 'included'
        ? 'Gratis'
        : `${priceType === 'from' ? 'vanaf ' : ''}${formattedPrice}`;

      target.textContent = label;
      if (priceNote && target.classList.contains('service-price')) {
        const note = document.createElement('span');
        note.textContent = priceNote;
        target.append(' ', note);
      }
    });
  } catch (error) {
    console.warn('Configuration could not be loaded; static prices remain visible.', error);
  }
})();
