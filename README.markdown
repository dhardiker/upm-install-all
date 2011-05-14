UPM - Install All for Speakeasy
================================

Supported Products
------------------
* [JIRA](http://www.atlassian.com/software/jira/)
* [Confluence](http://www.atlassian.com/software/confluence/)
* Refapp

Installation Instructions
-------------------------

1. Install [Speakeasy](http://confluence.atlassian.com/display/DEVNET/Speakeasy+Install+Guide)
2. Download [upm-install-all.zip](https://github.com/downloads/dhardiker/upm-install-all/upm-install-all.zip) or 

    Clone this project and create a zip 

         git clone git://github.com/dhardiker/upm-install-all.git
         cd upm-install-all
         zip -r upm-install-all.zip * -x README.markdown
         
4. Upload `upm-install-all.zip` to the Extensions page of speakeasy


Development
-----------

The following commands are useful (assuming that the [Atlassian Plugin SDK](http://confluence.atlassian.com/display/DEVNET/Developing+your+Plugin+using+the+Atlassian+Plugin+SDK) is installed.

     $ atlas-run-standalone --product jira
     $ atlas-run-standalone --product confluence --data-version 3.5
     $ rm ../upm-install-all.zip && \
        zip -r ../upm-install-all.zip * -x README.markdown amps-standalone && \
        curl -uadmin:admin -F plugin-file=@../upm-install-all.zip http://localhost:1990/confluence/rest/speakeasy/1/plugins && \
        curl -uadmin:admin -F plugin-file=@../upm-install-all.zip http://localhost:2990/jira/rest/speakeasy/1/plugins
