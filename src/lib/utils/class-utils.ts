/**
 * Utility functions for handling CSS class name manipulation.
 *
 * Current functions:
 * - cn: Combines class names, merges Tailwind classes, and handles conditional logic.
 *
 * Author: Elias Sjödin
 * Created: 2024-10-10
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
}
