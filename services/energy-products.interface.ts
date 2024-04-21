export interface EnergyProductsLink {
    href: string;
    method: string;
    rel: string;
}

export interface EnergyProducts {
    code: string;
    full_name: string;
    display_name: string;
    description: string;
    is_variable: boolean;
    is_green: boolean;
    is_tracker: boolean;
    is_prepay: boolean;
    is_business: boolean;
    is_restricted: boolean;
    term: number;
    brand: string;
    available_from: string;
    available_to: string | null;
    links: EnergyProductsLink[];
    sample_consumption: EnergyProductSampleConsumption;
    sample_quotes: EnergyProductSampleQuotes;
    dual_register_electricity_tariffs: EnergyProductTariffs;
    single_register_electricity_tariffs: EnergyProductTariffs;
    single_register_gas_tariffs: EnergyProductTariffs;
    tariffs_active_at: EnergyProductTariffs
}

export interface EnergyProductsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: EnergyProducts[];
}

export interface EnergyProductSampleConsumption {
    electricity_single_rate: any; // You might want to define an interface for this if it has a fixed structure
    electricity_dual_rate: any;
    dual_fuel_single_rate: any;
    dual_fuel_dual_rate: any;
    // Add more properties if needed
}

export interface EnergyProductSampleQuotes {
    _A: any; // You might want to define an interface for this if it has a fixed structure
    _B: any;
    _C: any;
    _D: any;
    _E: any;
    // Add more properties if needed
}

export interface EnergyProductTariffs {
    _A: any; // You might want to define an interface for this if it has a fixed structure
    _B: any;
    _C: any;
    _D: any;
    _E: any;
    // Add more properties if needed
}