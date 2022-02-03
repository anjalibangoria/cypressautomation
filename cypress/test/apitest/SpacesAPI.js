describe("Location Spaces API Test", () => {
  let createdSpaceId;

  it("Create Space Without Auth", () => {
    let title = "Anjali First Space"
    let description = "Anjali First Space as test data"

    cy.request({
      method: 'POST',
      url: '/hub/spaces',
      body: {
        "title": title,
        "description": description
      },
      failOnStatusCode: false
    }).then((spaceResponse) => {
      expect(spaceResponse.status).to.eq(401)
    })
  })

  it("Create Space with Invalid Auth", () => {
    let title = "Anjali First Space"
    let description = "Anjali First Space as test data"

    cy.request({
      method: 'POST',
      url: '/hub/spaces',
      auth: {
        'bearer': 'WrongToken'
      },
      body: {
        "title": title,
        "description": description
      },
      failOnStatusCode: false
    }).then((spaceResponse) => {
      expect(spaceResponse.status).to.eq(401)
      expect(spaceResponse.body).to.have.property('errorMessage', "Unauthorized");

    })
  })

  it("Create Space with valid inputs", () => {
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
      createdSpaceId = spaceResponse.body.id

      expect(spaceResponse.status).to.eq(200)
      expect(spaceResponse.body).property('id').to.not.be.oneOf([null, ""])
      expect(spaceResponse.body).to.have.property('title', title);
      expect(spaceResponse.body).to.have.property('description', description);

    })
  })


  it("Modify Space", () => {
    let title = "Anjali Modified First Space"
    let description = "Anjali First Space as test data"

    cy.request({
      method: 'PATCH',
      url: '/hub/spaces/' + createdSpaceId,
      auth: {
        'bearer': Cypress.config('token')
      },
      body: { "title": title }
    }).then((spaceResponse) => {
      expect(spaceResponse.status).to.eq(200)
      expect(spaceResponse.body).property('id').to.eq(createdSpaceId);
      expect(spaceResponse.body).to.have.property('title', title);
      expect(spaceResponse.body).to.have.property('description', description);
    })
  })


  it("Delete Space", () => {
    let title = "Anjali Modified First Space"
    let description = "Anjali First Space as test data"

    cy.request({
      method: 'DELETE',
      url: '/hub/spaces/' + createdSpaceId,
      auth: {
        'bearer': Cypress.config('token')
      }
    }).then((spaceResponse) => {
      expect(spaceResponse.status).to.eq(204)
      createdSpaceId = 0;
    })
  })
})