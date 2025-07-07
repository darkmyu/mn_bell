CREATE TABLE `alarms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`time` text NOT NULL,
	`title` text,
	`repeat` text DEFAULT 'DAILY' NOT NULL,
	`category` text,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` text DEFAULT 'Mon, 07 Jul 2025 03:05:54 GMT' NOT NULL,
	`updated_at` text DEFAULT 'Mon, 07 Jul 2025 03:05:54 GMT' NOT NULL
);
