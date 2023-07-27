class Smartphone {
    brand;
    model;
    operatingSystem;
    storageCapacity;
    screenSize;
    batCapacity;
    camResolution;
    processor;
    ram;
    biometricSecurity;
    waterResist;

    constructor(
        brand,
        model,
        operatingSystem,
        storageCapacity,
        screenSize,
        batCapacity,
        camResolution,
        processor,
        ram,
        biometricSecurity,
        waterResist
        )

    {
        this.brand = brand;
        this.model = model;
        this.operatingSystem = operatingSystem;
        this.storageCapacity = storageCapacity;
        this.screenSize = screenSize;
        this.batCapacity = batCapacity;
        this.camResolution = camResolution;
        this.processor = processor;
        this.ram = ram;
        this.biometricSecurity = biometricSecurity;
        this.waterResist = waterResist;
    }

    getinfo(){
        console.log(`
        Smart Phone Info

        BrandName                    : ${this.brand}
        Model                        : ${this.model}
        Operating System             : ${this.operatingSystem}
        Storage Capacity             : ${this.storageCapacity}
        Screen Size                  : ${this.screenSize}
        Battery Capacity             : ${this.batCapacity}
        Camera Resolution            : ${this.camResolution}
        Processor                    : ${this.processor}
        RAM                          : ${this.ram}
        Available Biometric Security : ${this.biometricSecurity}
        Can resist water?            : ${this.waterResist}
        `)
    }
}

const phone = new Smartphone(
    "Apple",
    "iPhone 14 Pro Max",
    "iOS",
    "128GB/256GB/1TB",
    "6.7inch",
    "4323mAh",
    "48MP",
    "Hexa-core",
    "6GB",
    ["Face Unlock", "Fingerprint Sensor"],
    "true",
    );
phone.getinfo();
