PLM - Download All for Speakeasy
================================

Supported Products
------------------
* [JIRA](http://www.atlassian.com/software/jira/)
* [Confluence](http://www.atlassian.com/software/confluence/)
* Refapp

Installation Instructions
-------------------------

1. Install [Speakeasy](http://confluence.atlassian.com/display/DEVNET/Speakeasy+Install+Guide)
2. Download [plm-download-all.zip](https://github.com/downloads/dhardiker/plm-download-all/plm-download-all.zip) or 

    Clone this project and create a zip 

         git clone git://github.com/dhardiker/plm-download-all.git
         cd plm-download-all
         zip -r plm-download-all.zip * -x README.markdown
         
4. Upload `plm-download-all.zip` to the Extensions page of speakeasy


Development
-----------

The following commands are useful (assuming that the [Atlassian Plugin SDK](http://confluence.atlassian.com/display/DEVNET/Developing+your+Plugin+using+the+Atlassian+Plugin+SDK) is installed.

     $ atlas-run-standalone --product jira
     $ atlas-run-standalone --product confluence --data-version 3.5
     $ rm ../pomodoro.zip && \
        zip -r ../plm-download-all.zip * -x README.markdown && \
        curl -uadmin:admin -F plugin-file=@../plm-download-all.zip http://localhost:1990/confluence/rest/speakeasy/1/plugins && \
        curl -uadmin:admin -F plugin-file=@../plm-download-all.zip http://localhost:2990/jira/rest/speakeasy/1/plugins
