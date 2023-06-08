
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS public.users
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    "firstName" character varying COLLATE pg_catalog."default" NOT NULL,
    "lastName" character varying COLLATE pg_catalog."default" NOT NULL,
    "created" timestamp without time zone NOT NULL DEFAULT now(),
    "updated" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedAt" timestamp without time zone,
    version integer NOT NULL,
    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY (id),
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS public.logs
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    clientinfo json,
    request json,
    action json,
    "created" timestamp without time zone NOT NULL DEFAULT now(),
    "updated" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedAt" timestamp without time zone,
    version integer NOT NULL,
    CONSTRAINT "PK_fb1b805f2f7795de79fa69340ba" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.logs
    OWNER to postgres;