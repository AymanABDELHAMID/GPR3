# Recipe created by recipetool
# This is the basis of a recipe and may need further editing in order to be fully functional.

SUMMARY = "Basic webserver"
LICENSE = "MIT"
LIC_FILES_CHKSUM = "file://${COMMON_LICENSE_DIR}/MIT;md5=0835ade698e0bcf8506ecda2f7b4f302"

SRC_URI = "file://server.js \
           file://webpages/gpr3_homepage.html"

S = "${WORKDIR}"

do_configure () {
	# Specify any needed configure commands here
	:
}

do_compile () {
	# Specify compilation commands here
	:
}

do_install() {
         install -d ${D}${bindir}/webserver
    	 install -m 0755 server.js ${D}${bindir}/webserver
	 install -d ${D}${bindir}/webserver/webpages
    	 install -m 0755 webpages/gpr3_homepage.html ${D}${bindir}/webserver/webpages
}
