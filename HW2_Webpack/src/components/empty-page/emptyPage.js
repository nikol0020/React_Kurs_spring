import React from "react";
import './emptyPage.scss';
import '../propTypes';
import ListItem from '../list-item';
import ErrorPage from '../error-page';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../../store/actions/index';
import {Link, Redirect} from 'react-router-dom';