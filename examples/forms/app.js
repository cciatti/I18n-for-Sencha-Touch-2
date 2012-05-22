//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

/**
 * This example is a simple demo of some of the form and field components in Sencha Touch.
 * It also shows how you can bind a Model instance to a form, and then update that instance with values
 * from the form panel.
 */

/**
 * Here we define a User model. An instance of this model will be used to load data into our form
 * panel. We will also update this form panel when you press the submit button.
 */
Ext.define('User', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'name',     type: 'string' },
            { name: 'password', type: 'string' },
            { name: 'disabled', type: 'string' },
            { name: 'email',    type: 'string' },
            { name: 'bio',      type: 'string' },
            { name: 'url',      type: 'string' },
            { name: 'startDate',     type: 'date' },
            { name: 'number',   type: 'integer' },
            { name: 'height',   type: 'integer' },
            { name: 'enable',   type: 'integer' },
            { name: 'spinner',  type: 'integer' },
            { name: 'rank',     type: 'string' },
            { name: 'enable',   type: 'boolean' },
            { name: 'cool',     type: 'boolean' },
            { name: 'color',    type: 'string' },
            { name: 'team',     type: 'string' },
            { name: 'secret',   type: 'boolean' }
        ]
    }
});

// Define our simple application
Ext.application({
    // Setup the icons and startup screens for phones and tablets.
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',
	name:'localeApplication',
    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    // Require the components we will be using in this example
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.Button',
		'Ext.DateExtras',
        'Ext.data.Store'
    ],

    /**
     * The launch method of our application gets called when the application is good to launch.
     * In here, we are going to build the structure of our application and add it into the Viewport.
     */
    launch: function() {
	
		I18n.translations = {};
		I18n.translations["en-US"] = enUS;
		I18n.translations["es-US"] = esUS;
		I18n.translations["es-VE"] = esVE;
		I18n.defaultLocale = "en-US";
		I18n.locale = "en-US";
		
		if (I18n) {
			Ext.Date.monthNames = I18n.t('date.month_names');
			Ext.Date.dayNames = I18n.t('date.abbr_day_names');
		}
				// Get all the items for our form.
        var items = this.getFormItems(),
            config, form;
		
		// Create the configuration of our form.
        // We give it the `formpanel` xtype and give it the items we got above.
        config = {
            xtype: 'formpanel',
			id: 'mainForm',
            items: items
        };

        // If we are on a phone, we just want to add the form into the viewport as is.
        // This will make it stretch to the size of the Viewport.
        if (Ext.os.deviceType == 'Phone') {
            form = Ext.Viewport.add(config);
        } else {
            // If we are not on a phone, we want to make the formpanel model and give it a fixed with and height.
            Ext.apply(config, {
                modal: true,
                height: 505,
                width: 480,
                centered: true,

                // Disable hideOnMaskTap so it cannot be hidden
                hideOnMaskTap: false
            });

            // Add it to the Viewport and show it.
            form = Ext.Viewport.add(config);
            form.show();
        }

        this.form = form;
    },

    /**
     * This method returns an array of all items we should add into the form panel we create above in our launch function.
     * We have created this function to simply make things cleaner and easier to read and understand. You could just put these items
     * inline up above in the form `config`.
     * @return {Array} items
     */
    getFormItems: function() {
        return [
            {
                xtype: 'fieldset',
				name:'personalInfoFieldset',
                title: I18n.t('items.personalInfoFieldset.title'),
                instructions: I18n.t('items.personalInfoFieldset.instructions'),
                defaults: {
                    required: true,
                    labelAlign: 'left',
                    labelWidth: '40%'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: I18n.t('items.personalInfoFieldset.items.name.label'),
                        autoCapitalize: false
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'password',
                        label: I18n.t('items.personalInfoFieldset.items.password.label')
                    },
                    {
                        xtype: 'textfield',
                        name: 'disabled',
                        label: I18n.t('items.personalInfoFieldset.items.disabled.label'),
                        disabled: true,
						placeHolder:I18n.t('items.personalInfoFieldset.items.disabled.placeHolder')
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: I18n.t('items.personalInfoFieldset.items.email.label'),
                        placeHolder: I18n.t('items.personalInfoFieldset.items.email.placeHolder')
                    },
                    {
                        xtype: 'urlfield',
                        name: 'url',
                        label: I18n.t('items.personalInfoFieldset.items.url.label'),
                        placeHolder: 'http://sencha.com'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'cool',
                        label: I18n.t('items.personalInfoFieldset.items.cool.label'),
                        value: true
                    },
                    {
                        xtype: 'spinnerfield',
                        name: 'spinner',
                        label: I18n.t('items.personalInfoFieldset.items.spinner.label')
                    },
                    {
                        xtype: 'selectfield',
                        name: 'rank',
                        label: I18n.t('items.personalInfoFieldset.items.rank.label'),
                        valueField: 'rank',
                        displayField: 'title',
                        store: {
							name:"rankStore",
                            data: [
                                { rank: 'master', title: I18n.t('items.personalInfoFieldset.items.rank.store.data.master')},
                                { rank: 'padawan', title: I18n.t('items.personalInfoFieldset.items.rank.store.data.padawan')},
                                { rank: 'teacher', title: I18n.t('items.personalInfoFieldset.items.rank.store.data.teacher')},
                                { rank: 'aid', title: I18n.t('items.personalInfoFieldset.items.rank.store.data.aid')}
                            ]
                        }
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'startDate',
                        label: I18n.t('items.personalInfoFieldset.items.startDate.label'),
						dateFormat: I18n.t('date.formats.default'),
                        value: new Date(),
                        picker: {
							name:'startDatePicker',
							useTitles:true,
							dayText: I18n.t('datetime.prompts.day'),
							monthText: I18n.t('datetime.prompts.month'),
							yearText: I18n.t('datetime.prompts.year'),
							cancelButton:I18n.t('helpers.cancel.prompt'),
							doneButton:I18n.t('helpers.done.prompt'),
							slotOrder :I18n.t('date.order'),
                            yearFrom: 1980
                        }
                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'secret',
                        value: 'false'
                    },
                    {
                        xtype: 'textareafield',
                        name: 'bio',
                        label: I18n.t('items.personalInfoFieldset.items.bio.label'),
                        maxRows: 10
                    },
                    {
                        xtype: 'sliderfield',
                        name: 'height',
                        label: I18n.t('items.personalInfoFieldset.items.height.label')
                    },
                    {
                        xtype: 'togglefield',
                        name: 'enable',
                        label: I18n.t('items.personalInfoFieldset.items.enable.label')
                    },
                    {
                        xtype: 'radiofield',
                        name: 'team',
                        label: I18n.t('items.personalInfoFieldset.items.team.label',{team: I18n.t('items.personalInfoFieldset.items.team.options.red')}),
                        value: 'redteam'
                    },
                    {
                        xtype: 'radiofield',
                        name: 'team',
                        label: I18n.t('items.personalInfoFieldset.items.team.label',{team: I18n.t('items.personalInfoFieldset.items.team.options.blue')}),
                       value: 'blueteam'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: I18n.t('items.favoriteColorFieldset.title'),
				name: 'favoriteColorFieldset',
                defaults: { xtype: 'radiofield' },
                items: I18n.t('items.favoriteColorFieldset.items')
            },
            {
                xtype: 'fieldset',
                title: 'HTML5',
				name: 'HTML5fieldset',
                items: [
                    {
                        xtype: 'numberfield',
                        name: 'number',
                        label: I18n.t('items.HTML5fieldset.items.number.label')
                    },
                    {
                        xtype: 'emailfield',
                        name: 'email2',
                        label: I18n.t('items.personalInfoFieldset.items.email.label'),
                        clearIcon: true
                    },
                    {
                        xtype: 'urlfield',
                        name: 'url2',
                        label:I18n.t('items.personalInfoFieldset.items.url.label'),
                        clearIcon: true
                    }
                ]
            },
            {
                xtype: 'fieldset',
				name: 'singleSelectFieldset',
                title: I18n.t('items.singleSelectFieldset.title'),
                items: [
                    {
                        xtype: 'selectfield',
                        name: 'optionsField',
                        options: I18n.t('items.singleSelectFieldset.items.optionsField.options')
                    }
                ]
            },
            // Create a docked bottom toolbar which will contain buttons to trigger various functions in our formpanel.
            {
                xtype: 'toolbar',
				name : 'mainToolbar',
                docked: 'bottom',
                items: [
					{
                        xtype: 'selectfield',
                        name: 'locale',
                        label: I18n.t('items.mainToolbar.items.locale.label'),
                        value: I18n.locale,
                        options: I18n.t('items.mainToolbar.items.locale.options'),
						listeners: {
							change: function(scope, newValue, oldValue, eOpts){
								I18n.locale = newValue;
								var form = Ext.Viewport.getComponent('mainForm');
								form.removeAll(true,true);
								var items = localeApplication.app.getFormItems();
								if (I18n) {
									Ext.Date.monthNames = I18n.t('date.month_names');
									Ext.Date.dayNames = I18n.t('date.abbr_day_names');
								}
								form.add(items);
							}
						}
                    },
                    // Lets add a load button which will load the formpanel with a User model
                    {
                        text: I18n.t('items.mainToolbar.items.loadModelButton.text'),
                        ui: 'round',
						name:'loadModelButton',
                        scope: this,
                        handler: function() {
                            var form = this.form;

                            // Check if we have already created a user model yet. if we haven't, then lets create one.
                            if (!form.user) {
                                // Create a date for the datepicker field
                                var date = new Date();
                                date.setMonth(4);
                                date.setYear(1989);
                                date.setDate(1);

                                // Create a new instance of the User model with a bunch of fake values.
                                form.user = Ext.create('User', {
                                    name:     'Akura',
                                    password: 'secret',
                                    email:    'saru@sencha.com',
                                    disabled: 'disabled',
                                    url:      'http://sencha.com',
                                    bio:      'Learned the hard way!',
                                    number:   20,
                                    height:   20,
                                    spinner:  5,
                                    enable:   1,
                                    cool:     true,
                                    startDate:     date,
                                    team:     'redteam',
                                    color:    'blue',
                                    rank:     'padawan',
                                    secret:    true
                                });
                            }

                            // Set the record of the form to the User record instance.
                            form.setRecord(form.user);
                        }
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: I18n.t('items.mainToolbar.items.resetButton.text'),
						name: 'resetButton',
                        // Ensure the scope is 'this' so we have access to the global 'form' instance
                        scope: this,
                        handler: function() {
                            // Call the form.reset method
                            this.form.reset();
                        }
                    },

                    // Finally we add a Save button which will mask the formpanel, and update the current record in the formpanel with
                    // the latest values from the formpanel.
                    {
                        text: I18n.t('items.mainToolbar.items.saveButton.text'),
						name: 'saveButton',
                        ui: 'confirm',
                        scope: this,
                        handler: function() {
                            var form = this.form;

                            // Mask the form
                            form.setMasked({
                                xtype: 'loadmask',
                                message: I18n.t('helpers.submit.submit', {model: I18n.t('items.personalInfoFieldset.title')})
                            });

                            // Put it inside a timeout so it feels like it is going to a server.
                            setTimeout(function() {
                                if (form.user) {
                                    // Call the updateRecord method of formpanel with the user record instance. This will update the user record
                                    // with the latest values.
                                    form.updateRecord(form.user, true);
                                }

                                // Unmask the formpanel
                                form.setMasked(false);
                            }, 1000);
                        }
                    }
                ]
            }
        ];
    }
});

