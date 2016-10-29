define(["require", "exports", './style-resource', 'aurelia-templating', './style-strategy', 'aurelia-metadata', './style-locator'], function (require, exports, style_resource_1, aurelia_templating_1, style_strategy_1, aurelia_metadata_1, style_locator_1) {
    "use strict";
    /**
     * Decorator: Indicates that the target is a styles class.
     */
    function styles() {
        return aurelia_templating_1.resource(new style_resource_1.StyleResource());
    }
    exports.styles = styles;
    /**
     * Decorator: Associates a custom style strategy.
     * @param strategy The style strategy instance.
     */
    function useStyleStrategy(strategy) {
        return function (target) {
            aurelia_metadata_1.metadata.define(style_locator_1.StyleLocator.styleStrategyMetadataKey, strategy, target);
        };
    }
    exports.useStyleStrategy = useStyleStrategy;
    /**
     * Decorator: Provides a relative path to styles.
     * @param path The path to the styles.
     */
    function useStyles(path) {
        return useStyleStrategy(new style_strategy_1.RelativeStyleStrategy(path));
    }
    exports.useStyles = useStyles;
    /**
     * Decorator: Provides a style template, directly inline.
     * @param css The css.
     */
    function inlineStyles(css) {
        return useStyleStrategy(new style_strategy_1.InlineStyleStrategy(css));
    }
    exports.inlineStyles = inlineStyles;
});