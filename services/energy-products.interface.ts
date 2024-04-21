export interface EnergyProductsLink {
    href: string;
    method: string;
    rel: string;
}

export interface EnergyProductTariff {
    direct_debit_monthly: {
        code: string;
        standing_charge_exc_vat: number;
        standing_charge_inc_vat: number;
        online_discount_exc_vat: number;
        online_discount_inc_vat: number;
        dual_fuel_discount_exc_vat: number;
        dual_fuel_discount_inc_vat: number;
        exit_fees_exc_vat: number;
        exit_fees_inc_vat: number;
        exit_fees_type: string;
        links: EnergyProductsLink[];
        standard_unit_rate_exc_vat: number;
        standard_unit_rate_inc_vat: number;
    };
}

export interface EnergyProductSampleConsumption {
    electricity_single_rate?: {
        electricity_standard?: number;
    };
    electricity_dual_rate?: {
        electricity_day?: number;
        electricity_night?: number;
    };
    dual_fuel_single_rate?: {
        electricity_standard?: number;
        gas_standard?: number;
    };
    dual_fuel_dual_rate?: {
        electricity_day?: number;
        electricity_night?: number;
        gas_standard?: number;
    };
}

export interface EnergyProductSampleQuotes {
    direct_debit_monthly: {
        electricity_single_rate: {
            annual_cost_inc_vat: number;
            annual_cost_exc_vat: number;
        };
    };
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
    dual_register_electricity_tariffs: Record<string, EnergyProductTariff>;
    single_register_electricity_tariffs: Record<string, EnergyProductTariff>;
    single_register_gas_tariffs: Record<string, EnergyProductTariff>;
    tariffs_active_at: string;
}

export interface EnergyProductsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: EnergyProducts[];
}


export interface EnergyProductSampleQuotes {
    _A?: {
        direct_debit_monthly?: {
            electricity_single_rate: {
                annual_cost_inc_vat: number;
                annual_cost_exc_vat: number;
            };
        };
    };
    _B?: {
        direct_debit_monthly?: {
            electricity_single_rate: {
                annual_cost_inc_vat: number;
                annual_cost_exc_vat: number;
            };
        };
    };
    _C?: {
        direct_debit_monthly?: {
            electricity_single_rate: {
                annual_cost_inc_vat: number;
                annual_cost_exc_vat: number;
            };
        };
    };
    _D?: {
        direct_debit_monthly?: {
            electricity_single_rate: {
                annual_cost_inc_vat: number;
                annual_cost_exc_vat: number;
            };
        };
    };
    _E?: {
        direct_debit_monthly?: {
            electricity_single_rate: {
                annual_cost_inc_vat: number;
                annual_cost_exc_vat: number;
            };
        };
    };
}


export interface DualRegisterElectricityTariff {
    direct_debit_monthly: {
        code: string;
        standing_charge_exc_vat: number;
        standard_unit_rate_exc_vat: number;
    };
}

export interface EnergyProductTariffs {
    _A: DualRegisterElectricityTariff;
    _B: DualRegisterElectricityTariff;
    _C: DualRegisterElectricityTariff;
    _D: DualRegisterElectricityTariff;
    _E: DualRegisterElectricityTariff;
}
