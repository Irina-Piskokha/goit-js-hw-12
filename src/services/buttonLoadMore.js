const hiddenClass = 'is-hidden';

function hide(button) {
  button.classList.add(hiddenClass);
}

function show(button) {
  button.classList.remove(hiddenClass);
}

function enable(button) {
  button.disabled = false;
}

function disable(button) {
  button.disabled = true;
}

export const buttonLoadMore = { hide, show, enable, disable };
