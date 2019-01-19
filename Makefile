DEPLOY_DIR="public"
DEPLOY_BUCKET="whatsthecodeforthat.com"
CACHE_MAX_AGE="259200" # 3 Days
CLOUDFRONT_ID="E2ELSRIPC4QQ55"
AWS_PROFILE="whatsthecodeforthat"

build: 
	HUGO_ENV="production" hugo
.PHONY: build

deploy: | build
	aws s3 sync \
		--cache-control "public, max-age=$(CACHE_MAX_AGE)" \
		--delete $(DEPLOY_DIR) \
		--profile $(AWS_PROFILE) \
		s3://$(DEPLOY_BUCKET)
	aws cloudfront create-invalidation \
		--distribution-id $(CLOUDFRONT_ID) \
		--profile $(AWS_PROFILE) \
  		--paths /\*
.PHONY: deploy

local:
	make -j2 local-server local-browser
.PHONY: local

local-server:
	hugo server -D
.PHONY: local-server

local-browser:
	open http://localhost:1313
.PHONY: local-browser
