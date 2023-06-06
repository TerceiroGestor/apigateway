
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: public.roles

-- DROP TABLE IF EXISTS public.roles;

CREATE TABLE IF NOT EXISTS public.roles
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    role character varying COLLATE pg_catalog."default" NOT NULL,
    "createdDate" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedDate" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedDate" timestamp without time zone,
    version integer NOT NULL,
    permissions character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.roles
    OWNER to postgres;

-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    "firstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying COLLATE pg_catalog."default" NOT NULL,
    "createdDate" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedDate" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedDate" timestamp without time zone,
    version integer NOT NULL,
    role_id uuid,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id),
    CONSTRAINT "REL_a2cecd1a3531c0b041e29ba46e" UNIQUE (role_id),
    CONSTRAINT "FK_a2cecd1a3531c0b041e29ba46e1" FOREIGN KEY (role_id)
        REFERENCES public.roles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

-- Table: public.logs

-- DROP TABLE IF EXISTS public.logs;

CREATE TABLE IF NOT EXISTS public.logs
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    clientinfo json,
    methodinfo json,
    action json,
    "createdDate" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedDate" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedDate" timestamp without time zone,
    version integer NOT NULL,
    CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logs
    OWNER to postgres;