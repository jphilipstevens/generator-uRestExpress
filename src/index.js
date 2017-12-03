/**
 * Created by Vlad Pantea on 12/2/2017.
 */
var Generator = require('yeoman-generator');
const mkdirp = require('mkdirp');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const yosay = require('yosay');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);
    }

    yosay(){
        console.log(yosay('Hello, and welcome microRestExpress. Basic working Express REST API.'));
    }

    microservice(){
        if (this.options.microservice) {
            return true;
        }

        const prompt = [{
            type: 'input',
            name: 'microservice',
            message: 'Enter name of the microservice:',
            default: 'uRestExpress'
        }];

        return this.prompt(prompt).then((response) => {
            this.options.microservice = response.microservice;
        });
    }

    description(){
        if (this.options.description) {
            return true;
        }

        const prompt = [{
            type: 'input',
            name: 'description',
            message: 'Enter description of microservice:',
            default: 'Express REST API'
        }];

        return this.prompt(prompt).then((response) => {
            this.options.description = response.description || 'Express REST API';
        });
    }

    version(){
        if (this.options.version) {
            return true;
        }

        const prompt = [{
            type: 'input',
            name: 'version',
            message: 'Enter starting version:',
            default: '1.0.0'
        }];

        return this.prompt(prompt).then((response) => {
            this.options.version = response.version || '1.0.0';
        });
    }

    author(){
        if (this.options.author) {
            return true;
        }

        const prompt = [{
            type: 'input',
            name: 'author',
            message: 'Enter author name:',
            default: 'Johnny Bravo'
        }];

        return this.prompt(prompt).then((response) => {
            this.options.author = response.author || '';
        });
    }

    writing() {        
        // create directory
        if (this.options.microservice) {
            this.destinationRoot(this.options.microservice);
            this.appname = this.options.microservice;            
        }

        // shared across all generators
        this.sourceRoot(path.join(__dirname, 'templates', 'shared'));
        glob.sync('**', { cwd: this.sourceRoot(), dot:true }).forEach((file) => {
            //do not copy package.json file
            if(!(file.indexOf('package.json') > -1)){
                this.fs.copyTpl(this.templatePath(file), this.destinationPath(file.replace(/^_/, '')), this);            
            }            
        });
                
        //copy express template     
        this.sourceRoot(path.join(__dirname, 'templates', 'express'));
        this.fs.copyTpl(this.templatePath('.'), this.destinationPath('.'), this);            
      
        //create package.json file
        function createPackageJson(pjson,options){
            pjson.name = options.microservice;
            pjson.version = options.version;
            pjson.description = options.description;
            pjson.author = options.author;

            return pjson;
        };

        //read package.json from shared
        function readExpressPackageJson(){
            let pjson = fs.readFileSync(path.join(__dirname, 'templates', 'shared', 'package.json'), 'utf8');
            return JSON.parse(pjson);
        }

        //copy to new package.json
        function copyFromExpress(pjson,expressJson){
            pjson.license = expressJson.license;
            pjson.dependencies = expressJson.dependencies;
            pjson.devDependencies = expressJson.devDependencies;
            pjson.main = expressJson.main;

            return pjson;
        }

        let jPath = this.destinationPath('package.json');
        var pjson = createPackageJson({},this.options);
        var expressPackage = readExpressPackageJson();


        fs.writeFileSync(jPath,JSON.stringify(copyFromExpress(pjson,expressPackage)));
    }

    install() {        
        this.installDependencies({
            bower: false,
            npm: true
        });
    }
};
