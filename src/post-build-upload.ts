import Client from "@genoswitch/igem-upload-api/src/index";
import { Dir, Dirent } from "node:fs";

import * as fs from "node:fs/promises";

(async () => {
	const username = process.env.IGEM_USERNAME!;
	const password = process.env.IGEM_PASSWORD!;

	const client = await Client.login(username, password);

	const files: Dirent[] = await fs.readdir("./assets/", {
		recursive: true,
		withFileTypes: true,
	});

	for (const file of files) {
		if (file.isFile() && !file.isDirectory()) {
			const fullFilename = `${file.path}/${file.name}`;
			console.log(fullFilename);
			console.log(file.path);

			client!.uploadFile(4642, fullFilename, file.name, file.path).catch(err => {
				console.log("Error uploading: " + fullFilename);
			});
		}
	}
})();
