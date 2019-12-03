// import style from './main.scss';
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

require('./main.scss');

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('./components', true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));

// requireAll(require.context('./components/', false, /\.sass$/));

