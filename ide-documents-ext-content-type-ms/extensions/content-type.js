var config = require("core/v4/configurations");

var DIRIGIBLE_DOCUMENTS_EXT_CONTENT_TYPE_MS_ENABLED = "DIRIGIBLE_DOCUMENTS_EXT_CONTENT_TYPE_MS_ENABLED";

function getContentType(fileName, contentType) {
	let enabled = JSON.parse(config.get(DIRIGIBLE_DOCUMENTS_EXT_CONTENT_TYPE_MS_ENABLED, "false"));
	if (enabled && typeof enabled === "boolean") {
		if (fileName.endsWith(".pptx")) {
			return "application/vnd.ms-powerpoint";
		} else if (fileName.endsWith(".docx")) {
			return "application/msword";
		} else if (fileName.endsWith(".xlsx")) {
			return "application/vnd.ms-excel";
		}
	}
	return contentType;	
}

exports.getContentTypeBeforeUpload = function(fileName, contentType) {
	return getContentType(fileName, contentType);
};

exports.getContentTypeBeforeDownload = function(fileName, contentType) {
	return getContentType(fileName, contentType);
};
