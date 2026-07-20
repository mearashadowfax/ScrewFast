/**
 * Demo form handler for template UI shells (contact, newsletter, auth).
 * Prevents silent submits and surfaces an honest demo status message.
 */
function initDemoForms() {
  document.querySelectorAll <
    HTMLFormElement >
    '[data-demo-form]'.forEach(form => {
      if (form.dataset.demoBound === 'true') return;
      form.dataset.demoBound = 'true';

      form.addEventListener('submit', event => {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }

        const status =
          form.querySelector < HTMLElement > '[data-demo-status]' ??
          form.parentElement?.querySelector <
            HTMLElement >
            '[data-demo-status]';
        const message =
          form.dataset.demoMessage ||
          status?.dataset.successMessage ||
          'Demo only — this form is not connected to a backend.';

        if (status) {
          status.textContent = message;
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
