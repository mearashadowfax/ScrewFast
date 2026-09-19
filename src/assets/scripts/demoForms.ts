/**
 * Behaviour for `DemoForm.astro`: intercepts submit, validates, shows the
 * form's demo message in its status element, and resets. Loaded by the
 * DemoForm module itself; nothing else needs to import it.
 */
function initDemoForms(): void {
  document
    .querySelectorAll<HTMLFormElement>('[data-demo-form]')
    .forEach(form => {
      if (form.dataset.demoBound === 'true') return;
      form.dataset.demoBound = 'true';

      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const status = form.querySelector<HTMLElement>('[data-demo-status]');
        if (status) {
          status.textContent = form.dataset.demoMessage ?? '';
          status.classList.remove('hidden');
        }

        form.reset();
      });
    });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDemoForms);
} else {
  initDemoForms();
}
