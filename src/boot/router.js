import { boot } from 'quasar/wrappers';

export let $router;  // <-- export a variable

export default boot(({ router }) => {
  $router = router;  // <-- assign router instance globally
});
