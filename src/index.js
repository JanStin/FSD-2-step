let test = (a, b) => a+b;
console.log(test(12,12));
import './theme/fonts.sass';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}


requireAll(require.context('./components', true, /\.(sass)$/));
requireAll(require.context('./components', true, /\.(jsx?)$/));
requireAll(require.context('./pages', true, /\.(jsx?)$/));

