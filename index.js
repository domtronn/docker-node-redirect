const express = require( 'express' )
const request = require( 'request' )
const R       = require( 'ramda' )
const app     = express()

const certs = require( './src/cert' )

// Base url to redirect to
const redirectBase = process.env.REDIRECT_BASE

app.get( '/*', function ( req, res ) {

  console.log( 'path = ', req.path )
  console.log( 'headers = ', req.headers )
  console.log( 'query = ', req.query )

  var options = R.merge( { url: `${ redirectBase }/${ req.path }`, qs: req.query }, certs )

  request( R.merge( certs, options ), function ( err, response, body ) {

    if ( err ) console.log( err )

    res.send( body )

  } )

} )

app.listen( '80' )
