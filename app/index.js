var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    promptQuestions: function() {
        var cb = this.async();
        this.opts = {};
        
        var prompts = [
            {
                type: "input",
                name: "extensionName",
                message: "Extension Name:",
                default: "Chrome Extension"
            },

            {
                type: "input",
                name: "extensionDescription",
                message: "Extension Description:",
                default: "\'Allo, \'Allo!"
            },

            {
                type: "input",
                name: "authorName",
                message: "Author Name:",
                default: ""
            },

            {
                type: "list",
                name: "actionType",
                message: "Extension Type:",
                choices: ["Browser Action", "Page Action", "Neither"],
                default: "Browser Action"
            }
        ];
        
        this.prompt(prompts, function(answers) {
            this.opts.name = answers.extensionName;
            this.opts.desc = answers.extensionDescription;
            this.opts.auth = answers.authorName;
            this.opts.action = answers.actionType;

            cb();
        }.bind(this));
    },

    copyFiles: function() {
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(),
            {
                extensionTitle: this.opts.name,
                extensionDescription: this.opts.desc,
                authorName: this.opts.auth,
                browserAction: (this.opts.action === "Browser Action"),
                pageAction: (this.opts.function === "Page Action")
            }
        )
    }
});
