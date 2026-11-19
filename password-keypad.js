(function (root) {
  'use strict';

  function appendDigit(input, digit) {
    const maxLength = Number(input.maxLength) > 0 ? Number(input.maxLength) : Infinity;
    if (!/^\d$/.test(String(digit)) || input.value.length >= maxLength) return;
    input.value += digit;
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function deleteLast(input) {
    input.value = input.value.slice(0, -1);
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }

  root.ArcadePasswordKeypad = { appendDigit, deleteLast };
})(window);