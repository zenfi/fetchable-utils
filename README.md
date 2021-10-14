# Fetchable Utils

A collection of static pieces of information that are useful to store outside from the database and that are needed to be changed on demand.

### [Banking](#banking)

| Name                  | Usage         | Description                                                                                               |
| --------------------- | ------------- | --------------------------------------------------------------------------------------------------------- |
| Belvo Render detector | Mobile App    | This render detector is a script that sends a message back to main app thread when elements are viewable on [Belvo Widget](https://developers.belvo.com/docs/widget-for-webviews). This is done because Belvo Widget goes through a set of internal authentication phases in which renders a black screen during the midtime, affecting UX |
