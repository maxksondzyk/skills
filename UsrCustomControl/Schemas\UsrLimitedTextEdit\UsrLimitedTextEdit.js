define("UsrLimitedTextEdit", [], function () {
    Ext.define("Terrasoft.controls.UsrLimitedTextEdit", {
        extend: "Terrasoft.controls.TextEdit",
        alternateClassName: "Terrasoft.UsrLimitedTextEdit",
		
        minLength: 0,
        maxLength: 1000,
		
        isLengthValid: function (textValue) {
            if (textValue.length < this.minLength || textValue.length > this.maxLength) {
                return false;
            }
            return true;
        },
		
        onEnterKeyPressed: function () {
            this.callParent(arguments);
			
            var textValue = this.getTypedValue();
            var isLengthValid = this.isLengthValid(textValue);
			
            if (isLengthValid) {
				this.validationInfo.isValid = true;
                this.validationInfo.invalidMessage ="";
            }
            else {
				var msg = "The value needs to contain between " + this.minLength + " and " + this.maxLength + " characters";
                this.validationInfo.isValid = false;
                this.validationInfo.invalidMessage = msg;
            }
            this.setMarkOut();
        },
    });
});