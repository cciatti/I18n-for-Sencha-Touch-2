var esUS = {
		"items":{
			"personalInfoFieldset":{
				"title":"Información Personal",
				"instructions":"Por favor suministre su información.",
				"items":{
					"name":{
						"label":"Nombre"
					},
					"password":{
						"label":"Clave secreta"
					},
					"disabled":{
						"label":"Desabilitado",
						"placeHolder":"Solo de lectura"
					},
					"email":{
						"label":"Correo Electrónico",
						"placeHolder":"tu@sencha.com"
					},
					"url":{
						"label":"URL"
					},
					"cool":{
						"label":"Frio"
					},
					"spinner":{
						"label":"Carrusel"
					},
					"rank":{
						"label":"Rango",
						"store":{
							"data":{
								"master":"Maestro",
								"padawan":"Estudiante",
								"teacher":"Instructor",
								"aid":"Asistente"
							}
						}
					},
					"startDate":{
						"label": "Fech de inicio"
					},
					"bio":{
						"label":"Biografía"
					},
					"height":{
						"label":"Altura"
					},
					"enable":{
						"label":"Modo de Seguridad"
					},
					"team":{
						"label":"Equipo %{team}",
						"options":{
							"red":"Rojo",
							"blue":"Azul"
						}
					}
					
				}
			},
			"mainToolbar":{
				"items":{
					"locale":{
						"label":"Local",
						"options":[
								{value: 'en-US', text: 'Inglés USA'},
                                { value: 'es-US', text: 'Español USA'},
                                { value: 'es-VE', text: 'Español Venezuela'}
								]
					},
					"loadModelButton":{
						"text":"Leer"
					},
					"resetButton":{
						"text":"Inicio"
					},
					"saveButton":{
						"text":"Salvar"
					}
				}
			},
			"favoriteColorFieldset":{
				"title":"Color Favorito",
				"items": [
                    { name: 'color', label: 'Rojo', value: 'red' },
                    { name: 'color', label: 'Verde', checked: true, value: 'green'}
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
				"title":"Texto Individual"
			},
			"singleSelectFieldset":{
				"title":"Single Select",
				"items":{
					"optionsField":{
						"options": [
                            {text: 'Esto solo es un gran selector con texto que sobresale', value: '1'},
                            {text: 'Otro item', value: '2'}
                        ]
					}
				}
			}
		},
		"number": {
			"format": {
				"separator": ".",
				"precision": 2,
				"delimiter": ",",
				"strip_insignificant_zeros": false,
				"significant": false
			},
			"human": {
				"format": {
					"precision": 3,
					"delimiter": ",",
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
						"trillion": "billón",
						"quadrillion": "mil billones",
						"billion": "mil millones",
						"million": "millón",
						"unit": "",
						"thousand": "mil"
					}
				}
			},
			"percentage": {
				"format": {
					"delimiter": ","
				}
			},
			"precision": {
				"format": {
					"delimiter": ","
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
					"record_invalid": "La validación falló: %{errors}",
					"greater_than_or_equal_to": "debe ser mayor o igual que %{count}",
					"less_than_or_equal_to": "debe ser menor o igual que %{count}",
					"confirmation": "no coincide con la confirmación",
					"not_an_integer": "debe ser un entero",
					"blank": "no puede estar en blanco",
					"invalid": "es inválido",
					"exclusion": "está reservado",
					"odd": "debe ser un número non",
					"wrong_length": {
						"one": "longitud errónea (debe ser de 1 caracter)",
						"other": "longitud errónea (debe ser de %{count} caracteres)"
					},
					"too_short": {
						"one": "es demasiado corto (mínimo 1 caracter)",
						"other": "es demasiado corto (mínimo %{count} caracteres)"
					},
					"even": "debe ser un número par",
					"empty": "no puede estar vacío",
					"less_than": "debe ser menor que %{count}",
					"greater_than": "debe ser mayor que %{count}",
					"equal_to": "debe ser igual a %{count}",
					"too_long": {
						"one": "es demasiado largo (máximo 1 caracter)",
						"other": "es demasiado largo (máximo %{count} caracteres)"
					},
					"taken": "ya ha sido tomado",
					"accepted": "debe ser aceptado",
					"not_a_number": "no es un número",
					"inclusion": "no está incluído en la lista"
				},
				"template": {
					"body": "Revise que los siguientes campos sean válidos:",
					"header": {
						"one": "%{model} no pudo guardarse debido a 1 error",
						"other": "%{model} no pudo guardarse debido a %{count} errores"
					}
				}
			}
		},
		"time": {
			"am": "am",
			"formats": {
				"default": "%a, %d de %b de %Y a las %H:%M:%S %Z",
				"short": "%d de %b a las %H:%M hrs",
				"long": "%A, %d de %B de %Y a las %I:%M %p"
			},
			"pm": "pm"
		},
		"errors": {
			"messages": {
				"record_invalid": "La validación falló: %{errors}",
				"greater_than_or_equal_to": "debe ser mayor o igual que %{count}",
				"less_than_or_equal_to": "debe ser menor o igual que %{count}",
				"confirmation": "no coincide con la confirmación",
				"not_an_integer": "debe ser un entero",
				"blank": "no puede estar en blanco",
				"invalid": "es inválido",
				"exclusion": "está reservado",
				"odd": "debe ser un número non",
				"wrong_length": {
					"one": "longitud errónea (debe ser de 1 caracter)",
					"other": "longitud errónea (debe ser de %{count} caracteres)"
				},
				"too_short": {
					"one": "es demasiado corto (mínimo 1 caracter)",
					"other": "es demasiado corto (mínimo %{count} caracteres)"
				},
				"even": "debe ser un número par",
				"empty": "no puede estar vacío",
				"less_than": "debe ser menor que %{count}",
				"greater_than": "debe ser mayor que %{count}",
				"equal_to": "debe ser igual a %{count}",
				"too_long": {
					"one": "es demasiado largo (máximo 1 caracter)",
					"other": "es demasiado largo (máximo %{count} caracteres)"
				},
				"taken": "ya ha sido tomado",
				"accepted": "debe ser aceptado",
				"not_a_number": "no es un número",
				"inclusion": "no está incluído en la lista"
			},
			"format": "%{attribute} %{message}",
			"template": {
				"body": "Revise que los siguientes campos sean válidos:",
				"header": {
					"one": "%{model} no pudo guardarse debido a 1 error",
					"other": "%{model} no pudo guardarse debido a %{count} errores"
				}
			}
		},
		"activemodel": {
			"errors": {
				"format": "%{attribute} %{message}",
				"messages": {
					"record_invalid": "La validación falló: %{errors}",
					"greater_than_or_equal_to": "debe ser mayor o igual que %{count}",
					"less_than_or_equal_to": "debe ser menor o igual que %{count}",
					"confirmation": "no coincide con la confirmación",
					"not_an_integer": "debe ser un entero",
					"blank": "no puede estar en blanco",
					"invalid": "es inválido",
					"exclusion": "está reservado",
					"odd": "debe ser un número non",
					"wrong_length": {
						"one": "longitud errónea (debe ser de 1 caracter)",
						"other": "longitud errónea (debe ser de %{count} caracteres)"
					},
					"too_short": {
						"one": "es demasiado corto (mínimo 1 caracter)",
						"other": "es demasiado corto (mínimo %{count} caracteres)"
					},
					"even": "debe ser un número par",
					"empty": "no puede estar vacío",
					"less_than": "debe ser menor que %{count}",
					"greater_than": "debe ser mayor que %{count}",
					"equal_to": "debe ser igual a %{count}",
					"too_long": {
						"one": "es demasiado largo (máximo 1 caracter)",
						"other": "es demasiado largo (máximo %{count} caracteres)"
					},
					"taken": "ya ha sido tomado",
					"accepted": "debe ser aceptado",
					"not_a_number": "no es un número",
					"inclusion": "no está incluído en la lista"
				},
				"template": {
					"body": "Revise que los siguientes campos sean válidos:",
					"header": {
						"one": "%{model} no pudo guardarse debido a 1 error",
						"other": "%{model} no pudo guardarse debido a %{count} errores"
					}
				}
			}
		},
		"date": {
			"month_names": [
				"Enero",
				"Febrero",
				"Marzo",
				"Abril",
				"Mayo",
				"Junio",
				"Julio",
				"Agosto",
				"Septiembre",
				"Octubre",
				"Noviembre",
				"Diciembre"
			],
			"order": [
				"day",
				"month",
				"year"
			],
			"abbr_day_names": [
				"dom",
				"lun",
				"mar",
				"mié",
				"jue",
				"vie",
				"sáb"
			],
			"formats": {
				"default": "m/d/Y",
				"short": "%d de %b",
				"long": "%A, %d de %B de %Y"
			},
			"day_names": [
				"domingo",
				"lunes",
				"martes",
				"miércoles",
				"jueves",
				"viernes",
				"sábado"
			],
			"abbr_month_names": [
				null,
				"ene",
				"feb",
				"mar",
				"abr",
				"may",
				"jun",
				"jul",
				"ago",
				"sep",
				"oct",
				"nov",
				"dic"
			]
		},
		"support": {
			"array": {
				"words_connector": ", ",
				"last_word_connector": " y ",
				"two_words_connector": " y "
			}
		},
		"helpers": {
			"submit": {
				"submit": "Guardar %{model}",
				"create": "Crear %{model}",
				"update": "Actualizar %{model}"
			},
			"select": {
				"prompt": "Por favor selecciona"
			},
			"cancel":{
				"prompt": "Cancelar"
			},
			"done":{
				"prompt": "Listo"
			}
		},
		"datetime": {
			"prompts": {
				"minute": "Minuto",
				"second": "Segundos",
				"month": "Mes",
				"hour": "Hora",
				"day": "Día",
				"year": "Año"
			},
			"distance_in_words": {
				"less_than_x_minutes": {
					"one": "menos de 1 minuto",
					"other": "menos de %{count} minutos"
				},
				"x_days": {
					"one": "1 día",
					"other": "%{count} días"
				},
				"almost_x_years": {
					"one": "casi 1 año",
					"other": "casi %{count} años"
				},
				"x_seconds": {
					"one": "1 segundo",
					"other": "%{count} segundos"
				},
				"x_months": {
					"one": "1 mes",
					"other": "%{count} meses"
				},
				"x_minutes": {
					"one": "1 minuto",
					"other": "%{count} minutos"
				},
				"less_than_x_seconds": {
					"one": "menos de 1 segundo",
					"other": "menos de %{count} segundos"
				},
				"about_x_hours": {
					"one": "cerca de 1 hora",
					"other": "cerca de %{count} horas"
				},
				"about_x_years": {
					"one": "cerca de 1 año",
					"other": "cerca de %{count} años"
				},
				"about_x_months": {
					"one": "cerca de 1 mes",
					"other": "cerca de %{count} meses"
				},
				"over_x_years": {
					"one": "más de 1 año",
					"other": "más de %{count} años"
				},
				"half_a_minute": "medio minuto"
			}
		}
	};