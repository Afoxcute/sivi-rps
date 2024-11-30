// Default configuration for Linea Sepolia

// Frontend
// const veraxSdk = new VeraxSdk(VeraxSdk.sivi-rps.vercel.app/);
// Backend
const veraxSdk = new VeraxSdk(VeraxSdk.0x2fA171a2F9F579A210516150B44bcE8d720e657A);

// Each Verax class has its corresponding DataMapper
// Get them from the SDK instance
const portalDataMapper = veraxSdk.portal; // RW Portals
const schemaDataMapper = veraxSdk.schema; // RW Schemas
const moduleDataMapper = veraxSdk.module; // RW Modules
const attestationDataMapper = veraxSdk.attestation; // RW Attestations
const utilsDataMapper = veraxSdk.utils; // Utils

const myPortal = await portalDataMapper.findOneById("0x34798a866f52949208e67fb57ad36244024c50c0");

// const mySchema = await schemaDataMapper.findOneById("0xce2647ed39aa89e6d1528a56deb6c30667ed2aae1ec2378ec3140c0c5d98a61e");

const myModule = await moduleDataMapper.findOneById("0x4bb8769e18f1518c35be8405d43d7cc07ecf501c");

const mySchema = await schemaDataMapper.findOneById("0xce2647ed39aa89e6d1528a56deb6c30667ed2aae1ec2378ec3140c0c5d98a61e");

const myAttestation = await attestationDataMapper.findOneById("0x000000000000000000000000000000000000000000000000000000000000109b");

//
// args:
// 	- criteria: object {property1: value1, property2: value2, ...}
// 	- page: integer (optional, default 0)
// 	- offset: integer (optional, default 50, max= 500)
// 	- orderBy: string (optional, default createdAt)
// 	- order(property?): enum string "ASC", "DESC" (optional, default "DESC")
//
const myAttestations = await attestationDataMapper.findBy(
    { portalId: "37773", subject: "John" },
    4,
    30,
    "schemaId",
    "ASC",
  );
  
  console.log(myAttestations);
  //
  // totalNumber: 147,
  // page: 0,
  // objects: [
  // 	{id: "12345", schemaId: "99AE34", portalId: "37773", subject: "Florian", ...},
  // 	{id: "2221E", schemaId: "AAF77E", portalId: "37773", subject: "Florian", ...},
  // 	...
  // ]
  //

  const portalAddress = "0xeea25bc2ec56cae601df33b8fc676673285e12cc";
const attestationPayload = {
        schemaId: "0x9ba590dd7fbd5bd1a7d06cdcb4744e20a49b3520560575cd63de17734a408738",
        expirationDate: 1693583329,
        subject: "0x828c9f04D1a07E3b0aBE12A9F8238a3Ff7E57b47",
        attestationData: [{ isBuidler: true }],
      };
const validationPayloads = [];
const newAttestation = await this.veraxSdk.portal.attest(portalAddress, attestationPayload, validationPayloads);