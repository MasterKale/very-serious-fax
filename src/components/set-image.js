AFRAME.registerComponent('set-image', {
  schema: {
    on: { type: 'string' },
    target: { type: 'selector' },
    src: { type: 'string' },
    dur: { type: 'number', default: 300 },
  },
  init() {
    const { data, el } = this;

    this.setupFadeAnimation();

    el.addEventListener(data.on, () => {
      data.target.emit('set-image-fade');
      setTimeout(() => {
        data.target.setAttribute('material', 'src', data.src);
      }, data.dur);
    });
  },
  setupFadeAnimation() {
    // Appends an animation that fades to black
    const { data } = this;
    const targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      loop: 2,
      dur: data.dur,
      from: '#FFF',
      to: '#000',
    });
  },
});
