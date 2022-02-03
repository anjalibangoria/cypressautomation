/**
 * 
 * This 
 */
describe("Location Features API Test", () => {
    let createdSpaceId = 0;
    let featureID = 0;

    it("Create feature using spaceID - Verify Create feature using valid spaceID", () => {
        let title = "Anjali First Space"
        let description = "Anjali First Space as test data"
        cy.request({
            method: 'POST',
            url: '/hub/spaces',
            auth: {
                'bearer': Cypress.config('token')
            },
            body: {
                "title": title,
                "description": description
            }
        }).then((spaceResponse) => {
            expect(spaceResponse.status).to.eq(200)
            createdSpaceId = spaceResponse.body.id
            cy.request({
                method: 'PUT',
                url: '/hub/spaces/' + createdSpaceId + '/features',
                auth: {
                    'bearer': Cypress.config('token')
                },
                failOnStatusCode: false,
                body: {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [
                                    16.363449,
                                    48.210033
                                ]
                            },
                            "properties": {
                                "name": "Greentube internet Solution",
                                "@ns:com:here:xyz": {
                                    "createdAt": 1517504700726,
                                    "updatedAt": 1517504700726,
                                    "tags": [
                                        "IT",
                                        "Company",
                                        "Software",
                                        "Solution"
                                    ]
                                },
                                "description": "Location of Greentube internet Solution"
                            }
                        }
                    ]
                },
            }).then((fearureResponse) => {
                expect(fearureResponse.status).to.eq(200)
                featureID = fearureResponse.body.features[0].id;
                expect(fearureResponse.body.features[0]).property("id").to.not.be.oneOf([null, ""])
                expect(fearureResponse.body.features[0].geometry.coordinates[0]).to.eq(16.363449)
                expect(fearureResponse.body.features[0].geometry.coordinates[1]).to.eq(48.210033)

            });
        });
    });


    it("Update existing feature information which will update Map pin/marker", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": featureID ,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                36.363449,
                                78.210033
                            ]
                        },
                        "properties": {
                            "name": "XYZ Location",
                            "@ns:com:here:xyz": {
                                "createdAt": 1517504700726,
                                "updatedAt": 1517504700726,
                                "tags": [
                                    "IT",
                                    "Company",
                                    "Software",
                                    "Solution"
                                ]
                            },
                            "description": "Location of XYZ Solution"
                        }
                    }
                ]
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(200)
            expect(fearureResponse.body.features[0]).property("id").to.not.be.oneOf([null, ""])
            expect(fearureResponse.body.features[0].geometry.coordinates[0]).to.eq(36.363449)
            expect(fearureResponse.body.features[0].geometry.coordinates[1]).to.eq(78.210033)
            expect(fearureResponse.body.features[0].properties.description).to.eq("Location of XYZ Solution")
            expect(fearureResponse.body.features[0].properties.name).to.eq("XYZ Location")

        });
    });


    it("Update Feature Information With Out-Of-Bound Co-ordinate - Verify error message when update existing feature information with invalid co-ordinates", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": featureID ,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                1116.363449,
                                48.210033
                            ]
                        },
                        "properties": {
                            "name": "Greentube internet Solution",
                            "@ns:com:here:xyz": {
                                "createdAt": 1517504700726,
                                "updatedAt": 1517504700726,
                                "tags": [
                                    "IT",
                                    "Company",
                                    "Software",
                                    "Solution"
                                ]
                            },
                            "description": "Location of Greentube internet Solution"
                        }
                    }
                ]
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(400);
            expect(fearureResponse.body.error).to.eq('IllegalArgument');

        });
    });

    it("Update Feature Information Without Co-ordinates - Verify error message when update existing feature information without co-ordinates", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id": featureID ,
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                            ]
                        },
                        "properties": {
                            "name": "Greentube internet Solution",
                            "@ns:com:here:xyz": {
                                "createdAt": 1517504700726,
                                "updatedAt": 1517504700726,
                                "tags": [
                                    "IT",
                                    "Company",
                                    "Software",
                                    "Solution"
                                ]
                            },
                            "description": "Location of Greentube internet Solution"
                        }
                    }
                ]
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(400);
            expect(fearureResponse.body.error).to.eq('IllegalArgument');
            expect(fearureResponse.body.errorMessage).to.have.string('A coordinates array of a Point must contain at least [longitude, latitude]');
        });
    });

    it("Update Feature With Invalid type As Request Body- Verify error message when update existing Feature with invalid type values", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "type": "GenerateErrorMessage",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                3, 3
                            ]
                        }
                    }

                ]
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(400)
            expect(fearureResponse.body.error).to.eq('IllegalArgument');
            expect(fearureResponse.body).to.have.property('errorMessage').include("Cannot read input JSON string.");
        });

    });

    it("Update Features With Invalid Space ID- Verify error message when update existing feature information With invalid SpaceID", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + 'ABCD' + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                36.363449,
                                78.210033
                            ]
                        }
                    }

                ]
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(404)
            expect(fearureResponse.body.error).to.eq('Exception');
            expect(fearureResponse.body).to.have.property('errorMessage').to.include("The resource with this ID does not exist");
        });

    });

    it("Update with Invalid SCHEMA - Error Message when update existing feature information With invalid values", () => {
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false,
            body: {
                "t": "FeatureCollection"
                
            },
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(400)
            expect(fearureResponse.body.error).to.eq('IllegalArgument');
            expect(fearureResponse.body).to.have.property('errorMessage').to.include("Cannot read input JSON string");
        });

    });


    it("Delete individual feature which is under given spaceID - Verify delete individual feature of valid spaceID", () => {
        let indFeatureId;
        cy.request({
            method: 'PUT',
            url: '/hub/spaces/' + createdSpaceId + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            body: {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                16.363449,
                                48.210033
                            ]
                        },
                        "properties": {
                            "name": "Greentube internet Solution",
                            "@ns:com:here:xyz": {
                                "createdAt": 1517504700726,
                                "updatedAt": 1517504700726,
                                "tags": [
                                    "IT",
                                    "Company",
                                    "Software",
                                    "Solution"
                                ]
                            },
                            "description": "Location of Greentube internet Solution"
                        }
                    }
                ]
            }
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(200);
            indFeatureId = fearureResponse.body.features[0].id;
            cy.request({
                method: 'DELETE',
                url: '/hub/spaces/' + createdSpaceId + '/features/' + indFeatureId,
                auth: {
                    'bearer': Cypress.config('token')
                }
            }).then((fearureResponse) => {
                //feature should delete successfully
                expect(fearureResponse.status).to.eq(204)
            });
        });
    });

    it("Delete all features for invalid spaceID - Verify error message when delete all feature of invalid spaceID", () => {

        cy.request({
            method: 'DELETE',
            url: '/hub/spaces/' + 'wrongIDyxlkjlkjl' + '/features',
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(404)
        });
    });

    it("Delete Individual feature with invalid feature id for valid spaceID - Verify error message when delete all feature of given invalid spaceID", () => {

        cy.request({
            method: 'DELETE',
            url: '/hub/spaces/' + createdSpaceId + '/features/' + "InvalidFeatureIdxyz",
            auth: {
                'bearer': Cypress.config('token')
            },
            failOnStatusCode: false
        }).then((fearureResponse) => {
            expect(fearureResponse.status).to.eq(404)
        });
    });

});