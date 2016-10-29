import { Container } from 'aurelia-dependency-injection';
import { Design } from './designs/design';
import { Host } from './hosts/host';
import { Platform } from './platforms/platform';
import { XpConfiguration } from './xp-configuration';
export declare class AureliaXP {
    use: XpConfiguration;
    host: Host;
    availableHosts: Host[];
    platform: Platform;
    design: Design;
    constructor(use: XpConfiguration, container: Container);
    platformChanged(platform: Platform): void;
    start(host?: string | Host): Promise<void>;
}