/*****************************************************************************
 * Open MCT, Copyright (c) 2014-2018, United States Government
 * as represented by the Administrator of the National Aeronautics and Space
 * Administration. All rights reserved.
 *
 * Open MCT is licensed under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * Open MCT includes source code licensed under additional open source
 * licenses. See the Open Source Licenses file (LICENSES.md) included with
 * this source code distribution or the Licensing information page available
 * at runtime from the About dialog for additional information.
 *****************************************************************************/

define([   
    "./src/ExampleStyleGuideModelProvider",
    "./src/MCTExample",
    'legacyRegistry'
], function (
    ExampleStyleGuideModelProvider,
    MCTExample,
    legacyRegistry
) {

    legacyRegistry.register("platform/features/my-items", {
        "name": "My Items",
        "description": "Defines a root named My Items",
        "extensions": {
            "types": [
                { "key": "my.cv", "name": "a.romaniak.cv", "cssClass": "icon-page", "description": "Introduction and overview to the style guide" },
            ],
            "views": [
                { "key": "my.cv", "type": "my.cv", "templateUrl": "templates/cv-alexander-romaniak.html", "editable": false },
            ],
            "roots": [
                {
                    "id": "mine"
                }
            ],
            "models": [
                {
                    "id": "mine",
                    "model": {
                        "name": "My Items",
                        "type": "folder",
                        "location": "ROOT",
                        "composition": [
                            "a.romaniak.cv"
                        ]
                    }
                }
            ],
            "directives": [
                {
                    "key": "mctExample",
                    "implementation": MCTExample
                }
            ],
            "components": [
                {
                    "provides": "modelService",
                    "type": "provider",
                    "implementation": ExampleStyleGuideModelProvider,
                    "depends": [
                        "$q"
                    ]
                }
            ],
            "stylesheets": [
                {
                    "stylesheetUrl": "css/style-guide-espresso.css",
                    "theme": "espresso"
                },
                {
                    "stylesheetUrl": "css/style-guide-snow.css",
                    "theme": "snow"
                }
            ]
        }
    });
});
