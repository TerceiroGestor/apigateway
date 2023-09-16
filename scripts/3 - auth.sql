CREATE TABLE
    IF NOT EXISTS public.auths (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        user_id uuid REFERENCES public.users (id) ON UPDATE NO ACTION ON DELETE CASCADE,
        "accessInfo" json,
        created timestamp without time zone NOT NULL DEFAULT now(),
        updated timestamp without time zone NOT NULL DEFAULT now(),
        deleted timestamp without time zone,
        version integer NOT NULL,
        PRIMARY KEY ("id")
    )

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.auths OWNER to postgres;