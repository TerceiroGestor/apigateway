CREATE TABLE "users" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "firebase_uid" varchar,
  "name" varchar,
  "social_name" varchar,
  "lastname" varchar,
  "email" varchar,
  "password" varchar,
  "birth" date,
  "created" timestamp without time zone NOT NULL DEFAULT now(),
  "updated" timestamp without time zone NOT NULL DEFAULT now(),
  "deleted" timestamp without time zone,
  "version" integer NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "logins" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "firebase_uid" varchar,
  "email" varchar,
  "emailVerified" boolean,
  "accessToken" text,
  "accessInfo" json,
  "created" timestamp without time zone NOT NULL DEFAULT now(),
  "updated" timestamp without time zone NOT NULL DEFAULT now(),
  "deleted" timestamp without time zone,
  "version" integer NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_user_id_logins" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE
);

CREATE TABLE "logs" (
  "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
  "user_id" uuid,
  "customerInfo" json,
  "requestInfo" json,
  "created" timestamp without time zone NOT NULL DEFAULT now(),
  "updated" timestamp without time zone NOT NULL DEFAULT now(),
  "deleted" timestamp without time zone,
  "version" integer NOT NULL,
  PRIMARY KEY ("id"),
  CONSTRAINT "FK_user_id_logs" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE
);

