import { QBadge } from 'quasar';

export default {
  name: 'MyUI',
  functional: true,
  render(h) {
    return h(QBadge, {
      props: {
        class: 'MyUI',
        label: 'MyUI',
      },
    });
  },
};
