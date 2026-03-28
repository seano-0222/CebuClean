const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');
const REGISTRY_KEY = 'cebuCleanVolunteerRegistry';
const SEMINAR_REGISTRY_KEY = 'cebuCleanSeminarRegistrations';

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  });
}

const bars = document.querySelectorAll('[data-progress]');
for (const bar of bars) {
  const value = Number(bar.getAttribute('data-progress'));
  const fill = bar.querySelector('span');
  if (fill && Number.isFinite(value)) {
    requestAnimationFrame(() => {
      fill.style.width = `${Math.max(0, Math.min(100, value))}%`;
    });
  }
}

const registryForm = document.querySelector('#volunteer-registry-form');
if (registryForm) {
  registryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const payload = {
      name: document.querySelector('#vol-name')?.value.trim() || '',
      email: document.querySelector('#vol-email')?.value.trim() || '',
      area: document.querySelector('#vol-area')?.value || '',
      role: document.querySelector('#vol-role')?.value || ''
    };

    localStorage.setItem(REGISTRY_KEY, JSON.stringify(payload));
    window.location.href = 'profile.html';
  });
}

const profileName = document.querySelector('#profile-name');
const profileEmail = document.querySelector('#profile-email');
const profileArea = document.querySelector('#profile-area');
const profileRole = document.querySelector('#profile-role');

if (profileName && profileEmail && profileArea && profileRole) {
  let registry = null;
  try {
    registry = JSON.parse(localStorage.getItem(REGISTRY_KEY) || 'null');
  } catch {
    registry = null;
  }

  profileName.value = registry?.name || '';
  profileEmail.value = registry?.email || '';
  profileArea.value = registry?.area || '';
  profileRole.value = registry?.role || '';
}

const registryButtons = document.querySelectorAll('[data-open-registry]');
const seminarModal = document.querySelector('#seminar-registry-modal');
const closeSeminarModalButton = document.querySelector('[data-close-registry]');
const seminarRegistryForm = document.querySelector('#seminar-registry-form');
const seminarInput = document.querySelector('#sem-reg-seminar');
const seminarNameInput = document.querySelector('#sem-reg-name');
const seminarEmailInput = document.querySelector('#sem-reg-email');

const openSeminarModal = (seminarLabel) => {
  if (!seminarModal || !seminarInput) {
    return;
  }

  seminarInput.value = seminarLabel;

  try {
    const registry = JSON.parse(localStorage.getItem(REGISTRY_KEY) || 'null');
    if (registry) {
      seminarNameInput.value = registry.name || '';
      seminarEmailInput.value = registry.email || '';
    }
  } catch {
    seminarNameInput.value = '';
    seminarEmailInput.value = '';
  }

  seminarModal.hidden = false;
};

const closeSeminarModal = () => {
  if (!seminarModal) {
    return;
  }

  seminarModal.hidden = true;
};

for (const button of registryButtons) {
  button.addEventListener('click', () => {
    const seminar = button.getAttribute('data-seminar') || 'Seminar';
    const schedule = button.getAttribute('data-schedule') || '';
    const seminarLabel = schedule ? `${seminar} (${schedule})` : seminar;
    openSeminarModal(seminarLabel);
  });
}

if (closeSeminarModalButton) {
  closeSeminarModalButton.addEventListener('click', closeSeminarModal);
}

if (seminarModal) {
  seminarModal.addEventListener('click', (event) => {
    if (event.target === seminarModal) {
      closeSeminarModal();
    }
  });
}

if (seminarRegistryForm) {
  seminarRegistryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const entry = {
      seminar: seminarInput.value,
      name: seminarNameInput.value.trim(),
      email: seminarEmailInput.value.trim(),
      registeredAt: new Date().toISOString()
    };

    let current = [];
    try {
      const parsed = JSON.parse(localStorage.getItem(SEMINAR_REGISTRY_KEY) || '[]');
      if (Array.isArray(parsed)) {
        current = parsed;
      }
    } catch {
      current = [];
    }

    current.push(entry);
    localStorage.setItem(SEMINAR_REGISTRY_KEY, JSON.stringify(current));

    let existingRegistry = null;
    try {
      existingRegistry = JSON.parse(localStorage.getItem(REGISTRY_KEY) || 'null');
    } catch {
      existingRegistry = null;
    }

    localStorage.setItem(REGISTRY_KEY, JSON.stringify({
      name: entry.name,
      email: entry.email,
      area: existingRegistry?.area || '',
      role: existingRegistry?.role || ''
    }));

    closeSeminarModal();
  });
}
