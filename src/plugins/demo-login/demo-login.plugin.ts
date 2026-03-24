import {PluginCommonModule, Type, VendurePlugin} from "@vendure/core";

/**
 * Displays test credentials and storefront link on the dashboard login page.
 * Only loaded in public tenant mode.
 */
@VendurePlugin({
    imports: [PluginCommonModule],
    dashboard: './dashboard/index.tsx',
    compatibility: '>3.0.0',
})
export class DemoLoginPlugin {
    static init(): Type<DemoLoginPlugin> {
        return DemoLoginPlugin;
    }
}
