# 2.1.0 (01/04/17)

* Add support for Grafana 4. Fixes [#7](https://github.com/OpenNMS/grafana-opennms-datasource/issues/7)

# 2.0.2 (11/26/16)

* Show the node label instead of the foreign source / foreign id when listing nodes as template variables. Fixes [#4](https://github.com/OpenNMS/grafana-opennms-datasource/issues/4)
* Minor bug fixes

# 2.0.1 (05/11/16)

* Updated query editor to use the updated Grafana 3.0.0 styles. Fixes [#2](https://github.com/OpenNMS/grafana-opennms-datasource/issues/2)

# 2.0.0 (04/16/16)

* Updated the datasource to be compatible with Grafana 3.0.0
* Added support for sub-attributes used by some of the poller modules (requires Horizon v17.x or greater)
* Added support for metric queries (requires Horizon v18.x or greater)
* Added support for using template variables in filter expression

# 1.1.0 (09/15/16)

* Added support for both single-valued and multi-valued template variables
* Added support for testing the datasource, introduced in Grafana 2.1.0
* Help information is now available in the datasource editor
* Added support for filters (requires Horizon v17.x or greater)

# 1.0.0-rc1 (06/15/16)

* Initial datasource implementation
