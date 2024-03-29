// WARNING: this file is auto generated, any changes will be lost
import { createDesignComponent, CanvasStore } from "framer"
const canvas = CanvasStore.shared(); // CANVAS_DATA;

export const colors = Object.freeze({
    /** rgba(0, 0, 0, 0) */
    "transparent": "var(--token-aaa366f2-cf3d-4caf-83d3-229689edabe7, rgba(0, 0, 0, 0))",
    /** #FAFAFA */
    "background": "var(--token-38769a0c-f417-4407-8b79-afe2b9136045, rgb(250, 250, 250))",
    /** #FFFFFF */
    "foreground": "var(--token-28e4ceca-a5ec-47bf-af8e-7a7667b499b9, rgb(255, 255, 255))",
    /** #111111 */
    "text": "var(--token-c8b7ad60-00ba-45c7-8a99-f711320505dd, rgb(17, 17, 17))",
    /** #F0F0F0 */
    "control": "var(--token-3b985749-e6e7-49d0-963d-74054b4bd63c, rgb(240, 240, 240))",
    /** #FFFFFF */
    "knob": "var(--token-97fadcad-1559-4017-bd21-a3d6c8daab2b, rgb(255, 255, 255))",
    /** #000000 */
    "black": "var(--token-20bfec31-e029-40cd-ab9a-60ea41da3898, rgb(0, 0, 0))",
    /** #808080 */
    "gray": "var(--token-e4b99a03-5c06-4118-bf1f-8a5b7dc82e46, rgb(128, 128, 128))",
    /** #FFFFFF */
    "white": "var(--token-bd20ece0-a22d-46f0-aa8d-0ae39d509de1, rgb(255, 255, 255))",
    /** #0055FF */
    "blue": "var(--token-4e199204-00e8-4fa9-af34-e0f059f0b199, rgb(0, 85, 255))",
    /** #0099FF */
    "azure": "var(--token-7ebf29e6-7f33-4f62-be46-b2e13b323967, rgb(0, 153, 255))",
    /** #11DDDD */
    "teal": "var(--token-2cc40353-7cdb-4949-af82-f4218dd9dbe4, rgb(17, 221, 221))",
    /** #05DD66 */
    "green": "var(--token-5d6333ae-5035-4eaa-8e25-5b6febf7885b, rgb(5, 221, 102))",
    /** #FFCC00 */
    "yellow": "var(--token-22dddc84-0868-4bde-b05b-adecc059a174, rgb(255, 204, 0))",
    /** #FF9900 */
    "orange": "var(--token-133b21c3-4085-4d97-82d6-ad1c2c416ef3, rgb(255, 153, 0))",
    /** #FF3333 */
    "red": "var(--token-a919b1f0-27e8-4f76-81d6-a0267ce60c20, rgb(255, 51, 51))",
    /** #BB00FF */
    "violet": "var(--token-aaf59c32-143f-4c85-81f0-7b595794f236, rgb(187, 0, 255))",
    /** #6600FF */
    "purple": "var(--token-de310ecc-cc3b-466e-a297-763cf59b5431, rgb(102, 0, 255))",
    /** rgba(0, 0, 0, 0) */
    "dark/transparent": "var(--token-ae828e65-aec2-4f58-b255-8f38b2c20c7e, rgba(0, 0, 0, 0))",
    /** #222222 */
    "dark/background": "var(--token-5f773edb-af08-4578-8f5c-81d47adc44b7, rgb(34, 34, 34))",
    /** #333333 */
    "dark/foreground": "var(--token-8b85868a-7fc3-41ac-b54b-a7b8a8208e44, rgb(51, 51, 51))",
    /** #FFFFFF */
    "dark/text": "var(--token-ae24c55b-9226-4f14-a74d-78555bf1d810, rgb(255, 255, 255))",
    /** #4D4D4D */
    "dark/control": "var(--token-8dc21af9-e5d9-4a3d-87e0-9f882c0581ed, rgb(77, 77, 77))",
    /** #FFFFFF */
    "dark/knob": "var(--token-f608a8b8-93d6-44c0-943d-d2df96c4610d, rgb(255, 255, 255))",
    /** #000000 */
    "dark/black": "var(--token-24d8c0d7-1793-4b7c-8984-8ab2fd349a0e, rgb(0, 0, 0))",
    /** #555555 */
    "dark/gray": "var(--token-23bc8989-8495-49d3-b26b-60f01c38a1da, rgb(85, 85, 85))",
    /** #FFFFFF */
    "dark/white": "var(--token-d49096d8-81a7-4625-98c7-162b358f87ac, rgb(255, 255, 255))",
    /** #3377FF */
    "dark/blue": "var(--token-886c8c0f-0d2c-4518-8d1f-bb3b785d234d, rgb(51, 119, 255))",
    /** #44BBFF */
    "dark/azure": "var(--token-6ae6e491-d906-40f7-b24c-a52e74142dfe, rgb(68, 187, 255))",
    /** #66EEEE */
    "dark/teal": "var(--token-97680ba1-eb65-46ec-8e16-e57823ba1e1f, rgb(102, 238, 238))",
    /** #11EE66 */
    "dark/green": "var(--token-9075998a-25eb-4560-bf44-2263dfe12b48, rgb(17, 238, 102))",
    /** #FFDD44 */
    "dark/yellow": "var(--token-919ebeb8-7281-448b-a5e7-5c20e6e4709f, rgb(255, 221, 68))",
    /** #FFAA44 */
    "dark/orange": "var(--token-3cbe5d25-5318-446f-aaac-887073076111, rgb(255, 170, 68))",
    /** #FF5566 */
    "dark/red": "var(--token-5f0a385f-667a-46ff-bbf6-f60a0a13ea9f, rgb(255, 85, 102))",
    /** #CC44FF */
    "dark/violet": "var(--token-8525116b-6562-4a4f-8871-5bacba5552c8, rgb(204, 68, 255))",
    /** #8844FF */
    "dark/purple": "var(--token-6d181c0c-4789-4726-915c-3d5e5ad268c3, rgb(136, 68, 255))",
})
