export class GeneralUtilities {
	public static trim(providedString: string, character: string, recursive = false): string {
		let providedStringLength: number = providedString.length;

		while (providedString[0] === character) {
			providedString = providedString.substring(1);
			--providedStringLength;

			if (!recursive) break;
		}

		while (providedString[providedStringLength - 1] === character) {
			providedString = providedString.substring(0, providedStringLength - 1);
			--providedStringLength;

			if (!recursive) break;
		}

		return providedString;
	}
}
