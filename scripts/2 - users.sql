
CREATE TABLE
    IF NOT EXISTS public.users (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        auth_id character varying COLLATE pg_catalog."default",
        name character varying COLLATE pg_catalog."default" NOT NULL,
        social_name character varying COLLATE pg_catalog."default",
        lastname character varying COLLATE pg_catalog."default",
        email character varying COLLATE pg_catalog."default" NOT NULL,
        password character varying COLLATE pg_catalog."default",
        email_verified boolean,
        birth date,
        created timestamp without time zone NOT NULL DEFAULT now(),
        updated timestamp without time zone NOT NULL DEFAULT now(),
        deleted timestamp without time zone,
        version integer NOT NULL,
        PRIMARY KEY ("id")
    )

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users OWNER to postgres;

