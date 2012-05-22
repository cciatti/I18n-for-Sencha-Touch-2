var enUS =  {
		"items":{
			"personalInfoFieldset":{
				"title":"Personal Information",
				"instructions":"Please enter the information above.",
				"items":{
					"name":{
						"label":"Name"
					},
					"password":{
						"label":"Password"
					},
					"disabled":{
						"label":"Disabled",
						"placeHolder":"disabled"
					},
					"email":{
						"label":"Email",
						"placeHolder":"you@sencha.com"
					},
					"url":{
						"label":"URL"
					},
					"cool":{
						"label":"Cool"
					},
					"spinner":{
						"label":"Spinner"
					},
					"rank":{
						"label":"Rank",
						"store":{
							"data":{
								"master":"Master",
								"padawan":"Student",
								"teacher":"Instructor",
								"aid":"Assistant"
							}
						}
					},
					"startDate":{
						"label": "Start Date"
					},
					"bio":{
						"label":"Bio"
					},
					"height":{
						"label":"Height"
					},
					"enable":{
						"label":"Security Mode"
					},
					"team":{
						"label":"Team %{team}",
						"options":{
							"red":"Red",
							"blue":"Blue"
						}
					}
				}
			},
			"mainToolbar":{
				"items":{
					"locale":{
						"label":"Locale",
						"options":[
								{value: 'en-US', text: 'US English'},
                                { value: 'es-US', text: 'US Spanish'},
                                { value: 'es-VE', text: 'Venezuela Spanish'}
								]
					},
					"loadModelButton":{
						"text":"Load"
					},
					"resetButton":{
						"text":"Reset"
					},
					"saveButton":{
						"text":"Save"
					}
				}
			},
			"favoriteColorFieldset":{
				"title":"Favorite Color",
				"items": [
                    { name: 'color', label: 'Red', value: 'red' },
                    { name: 'color', label: 'Green', checked: true, value: 'green'}
                ]
			},
			"HTML5fieldset":{
				items:{
					"number":{
						"label":"Number"
					}
				}
			},
			"singleTextFieldset":{
				"title":"Single Text"
			},
			"singleSelectFieldset":{
				"title":"Single Select",
				"items":{
					"optionsField":{
						"options": [
                            {text: 'This is just a big select with text that is overflowing', value: '1'},
                            {text: 'Another item', value: '2'}
                        ]
					}
				}
			}
		},
		"number": {
			"format": {
				"separator": ".",
				"precision": 3,
				"delimiter": ",",
				"strip_insignificant_zeros": false,
				"significant": false
			},
			"human": {
				"format": {
					"precision": 3,
					"delimiter": "",
					"strip_insignificant_zeros": true,
					"significant": true
				},
				"storage_units": {
					"format": "%n %u",
					"units": {
						"kb": "KB",
						"tb": "TB",
						"gb": "GB",
						"byte": {
							"one": "Byte",
							"other": "Bytes"
						},
						"mb": "MB"
					}
				},
				"decimal_units": {
					"format": "%n %u",
					"units": {
						"trillion": "Trillion",
						"quadrillion": "Quadrillion",
						"billion": "Billion",
						"million": "Million",
						"unit": "",
						"thousand": "Thousand"
					}
				}
			},
			"percentage": {
				"format": {
					"delimiter": ""
				}
			},
			"precision": {
				"format": {
					"delimiter": ""
				}
			},
			"currency": {
				"format": {
					"format": "%u%n",
					"unit": "$",
					"separator": ".",
					"precision": 2,
					"delimiter": ",",
					"strip_insignificant_zeros": false,
					"significant": false
				}
			}
		},
		"activerecord": {
			"errors": {
				"format": "%{attribute} %{message}",
				"messages": {
					"record_invalid": "Validation failed: %{errors}",
					"greater_than_or_equal_to": "must be greater than or equal to %{count}",
					"less_than_or_equal_to": "must be less than or equal to %{count}",
					"confirmation": "doesn't match confirmation",
					"not_an_integer": "must be an integer",
					"blank": "can't be blank",
					"invalid": "is invalid",
					"exclusion": "is reserved",
					"odd": "must be odd",
					"wrong_length": {
						"one": "is the wrong length (should be 1 character)",
						"other": "is the wrong length (should be %{count} characters)"
					},
					"too_short": {
						"one": "is too short (minimum is 1 character)",
						"other": "is too short (minimum is %{count} characters)"
					},
					"even": "must be even",
					"empty": "can't be empty",
					"less_than": "must be less than %{count}",
					"greater_than": "must be greater than %{count}",
					"equal_to": "must be equal to %{count}",
					"too_long": {
						"one": "is too long (maximum is 1 character)",
						"other": "is too long (maximum is %{count} characters)"
					},
					"taken": "has already been taken",
					"accepted": "must be accepted",
					"not_a_number": "is not a number",
					"inclusion": "is not included in the list"
				},
				"template": {
					"body": "There were problems with the following fields:",
					"header": {
						"one": "1 error prohibited this %{model} from being saved",
						"other": "%{count} errors prohibited this %{model} from being saved"
					}
				}
			}
		},
		"time": {
			"am": "am",
			"formats": {
				"default": "%a, %d %b %Y %H:%M:%S %z",
				"short": "%d %b %H:%M",
				"long": "%B %d, %Y %H:%M"
			},
			"pm": "pm"
		},
		"errors": {
			"messages": {
				"record_invalid": "Validation failed: %{errors}",
				"greater_than_or_equal_to": "must be greater than or equal to %{count}",
				"less_than_or_equal_to": "must be less than or equal to %{count}",
				"confirmation": "doesn't match confirmation",
				"not_an_integer": "must be an integer",
				"blank": "can't be blank",
				"invalid": "is invalid",
				"exclusion": "is reserved",
				"odd": "must be odd",
				"wrong_length": {
					"one": "is the wrong length (should be 1 character)",
					"other": "is the wrong length (should be %{count} characters)"
				},
				"too_short": {
					"one": "is too short (minimum is 1 character)",
					"other": "is too short (minimum is %{count} characters)"
				},
				"even": "must be even",
				"empty": "can't be empty",
				"less_than": "must be less than %{count}",
				"greater_than": "must be greater than %{count}",
				"equal_to": "must be equal to %{count}",
				"too_long": {
					"one": "is too long (maximum is 1 character)",
					"other": "is too long (maximum is %{count} characters)"
				},
				"taken": "has already been taken",
				"accepted": "must be accepted",
				"not_a_number": "is not a number",
				"inclusion": "is not included in the list"
			},
			"format": "%{attribute} %{message}",
			"template": {
				"body": "There were problems with the following fields:",
				"header": {
					"one": "1 error prohibited this %{model} from being saved",
					"other": "%{count} errors prohibited this %{model} from being saved"
				}
			}
		},
		"activemodel": {
			"errors": {
				"format": "%{attribute} %{message}",
				"messages": {
					"record_invalid": "Validation failed: %{errors}",
					"greater_than_or_equal_to": "must be greater than or equal to %{count}",
					"less_than_or_equal_to": "must be less than or equal to %{count}",
					"confirmation": "doesn't match confirmation",
					"not_an_integer": "must be an integer",
					"blank": "can't be blank",
					"invalid": "is invalid",
					"exclusion": "is reserved",
					"odd": "must be odd",
					"wrong_length": {
						"one": "is the wrong length (should be 1 character)",
						"other": "is the wrong length (should be %{count} characters)"
					},
					"too_short": {
						"one": "is too short (minimum is 1 character)",
						"other": "is too short (minimum is %{count} characters)"
					},
					"even": "must be even",
					"empty": "can't be empty",
					"less_than": "must be less than %{count}",
					"greater_than": "must be greater than %{count}",
					"equal_to": "must be equal to %{count}",
					"too_long": {
						"one": "is too long (maximum is 1 character)",
						"other": "is too long (maximum is %{count} characters)"
					},
					"taken": "has already been taken",
					"accepted": "must be accepted",
					"not_a_number": "is not a number",
					"inclusion": "is not included in the list"
				},
				"template": {
					"body": "There were problems with the following fields:",
					"header": {
						"one": "1 error prohibited this %{model} from being saved",
						"other": "%{count} errors prohibited this %{model} from being saved"
					}
				}
			}
		},
		"date": {
			"month_names": [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"order": [
				"year",
				"month",
				"day"
			],
			"abbr_day_names": [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			"formats": {
				"default": "m-d-y",
				"short": "%b %d",
				"long": "%B %d, %Y"
			},
			"day_names": [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			],
			"abbr_month_names": [
				null,
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			]
		},
		"support": {
			"array": {
				"words_connector": ", ",
				"last_word_connector": ", and ",
				"two_words_connector": " and "
			}
		},
		"helpers": {
			"submit": {
				"submit": "Save %{model}",
				"create": "Create %{model}",
				"update": "Update %{model}"
			},
			"select": {
				"prompt": "Please select"
			},
			"cancel":{
				"prompt": "Cancel"
			},
			"done":{
				"prompt": "Done"
			}
		},
		"datetime": {
			"prompts": {
				"minute": "Minute",
				"second": "Seconds",
				"month": "Month",
				"hour": "Hour",
				"day": "Day",
				"year": "Year"
			},
			"distance_in_words": {
				"less_than_x_minutes": {
					"one": "less than a minute",
					"other": "less than %{count} minutes"
				},
				"x_days": {
					"one": "1 day",
					"other": "%{count} days"
				},
				"almost_x_years": {
					"one": "almost 1 year",
					"other": "almost %{count} years"
				},
				"x_seconds": {
					"one": "1 second",
					"other": "%{count} seconds"
				},
				"x_months": {
					"one": "1 month",
					"other": "%{count} months"
				},
				"x_minutes": {
					"one": "1 minute",
					"other": "%{count} minutes"
				},
				"less_than_x_seconds": {
					"one": "less than 1 second",
					"other": "less than %{count} seconds"
				},
				"about_x_hours": {
					"one": "about 1 hour",
					"other": "about %{count} hours"
				},
				"about_x_years": {
					"one": "about 1 year",
					"other": "about %{count} years"
				},
				"about_x_months": {
					"one": "about 1 month",
					"other": "about %{count} months"
				},
				"over_x_years": {
					"one": "over 1 year",
					"other": "over %{count} years"
				},
				"half_a_minute": "half a minute"
			}
		}
		
};
