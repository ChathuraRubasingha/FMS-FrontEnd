import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faSearch } from '@fortawesome/free-solid-svg-icons'
import PendingBookingRequests_Table from './PendingBookingRequests_Table'
import { Link } from 'react-router-dom'
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  DocsExample,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'

function PendingBookingRequests() {
  return (
    <div>
      <CRow>
        <CCol sm={8} lg={8}>
          {' '}
          <PendingBookingRequests_Table />
        </CCol>
        <CCol sm={4} lg={4}>
          {' '}
          <CCardHeader style={{ height: '90px' }}>
            <h5 style={{ paddingTop: '15px' }}>Menu</h5>
          </CCardHeader>
          <br />
          <CCard className="mb-4">
            <CCardBody>
              <CListGroup>
                <Link to="/booking" style={{ textDecoration: 'none' }}>
                  <CListGroupItem>Booking Requests</CListGroupItem>
                </Link>
                <Link to="/pendingbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem active>Pending Booking Requests</CListGroupItem>
                </Link>
                <Link to="/approvedbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Approved Booking Requests</CListGroupItem>
                </Link>
                <Link to="/assignedbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Assigned Booking Requests</CListGroupItem>
                </Link>

                <Link to="/disapprovedbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Disapproved Booking Requests</CListGroupItem>{' '}
                </Link>
                <Link to="/cancelledbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Cancelled Booking Requests</CListGroupItem>{' '}
                </Link>
                <Link to="/completedbookingrequests" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Completed Booking Requests</CListGroupItem>{' '}
                </Link>
                <Link to="/vehicleinandout" style={{ textDecoration: 'none' }}>
                  {' '}
                  <CListGroupItem>Vehicle IN and OUT</CListGroupItem>
                </Link>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default PendingBookingRequests
