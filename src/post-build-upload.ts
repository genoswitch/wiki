import Client from "@genoswitch/igem-upload-api/src/index";
import { Dir, Dirent } from "node:fs";

import * as fs from "node:fs/promises";

(async () => {
	const username = process.env.IGEM_USERNAME!;
	const password = process.env.IGEM_PASSWORD!;

	const client = await Client.login(username, password);

	const files: Dirent[] = await fs.readdir("./app/assets/", {
		recursive: true,
		withFileTypes: true,
	});

	for (const file of files) {
		if (file.isFile() && !file.isDirectory()) {
			const folder = file.path.split("app/")[1];
			const fullFilename = `${file.path}/${file.name}`;
			console.log(fullFilename);

			client!.uploadFile(4642, fullFilename, file.name, folder).catch(err => {
				console.log("Error uploading: " + fullFilename);
			});
		}
	}
})();
