# Hacking

To make changes to this plugin, make sure you have a running instance of Grafana and that your current user has write access to the plugins directory.
The Gruntfile assumes that the plugins directory is located at `/var/lib/grafana/plugins`.

After checking out the source tree, run:

    npm install
    grunt
    grunt copy:deploy

Once successfully, you can make change and have those deployed automatically using:

    grunt watch:deploy
