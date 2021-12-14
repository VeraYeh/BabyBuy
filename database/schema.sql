set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";
CREATE TABLE "users" (
	"userId" serial NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
	"babyName" TEXT NOT NULL,
	"dueDate" DATE NOT NULL,
	"password" TEXT NOT NULL,
	"createdAt" timestamptz NOT NULL default now(),
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "entries" (
	"entryId" serial NOT NULL,
	"item" TEXT NOT NULL,
	"status" TEXT NOT NULL,
	"notes" TEXT NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "categories" (
	"categoryId" serial NOT NULL UNIQUE,
	"category" TEXT NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "categories_pk" PRIMARY KEY ("categoryId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "entryCategories" (
	"entryId" integer NOT NULL,
	"categoryId" integer NOT NULL,
	CONSTRAINT "entryCategories_pk" PRIMARY KEY ("entryId","categoryId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "categories" ADD CONSTRAINT "categories_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "entryCategories" ADD CONSTRAINT "entryCategories_fk0" FOREIGN KEY ("entryId") REFERENCES "entries"("entryId");
ALTER TABLE "entryCategories" ADD CONSTRAINT "entryCategories_fk1" FOREIGN KEY ("categoryId") REFERENCES "categories"("categoryId");
