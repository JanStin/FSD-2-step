// import style from './main.scss';
import 'jquery';
require('./main.scss');

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));

// requireAll(require.context('./components/', false, /\.sass$/));

