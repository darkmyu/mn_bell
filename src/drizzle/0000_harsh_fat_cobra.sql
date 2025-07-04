CREATE TABLE `alarms` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`time` text NOT NULL,
	`title` text,
	`repeat` text DEFAULT 'DAILY' NOT NULL,
	`category` text,
	`is_active` integer DEFAULT true NOT NULL,
	`created_at` text NOT NULL,
	`updated_at` text NOT NULL
);
